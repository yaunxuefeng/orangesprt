package com.fullhome.website.utils;

import org.apache.commons.httpclient.*;
import org.apache.commons.httpclient.cookie.CookiePolicy;
import org.apache.commons.httpclient.methods.ByteArrayRequestEntity;
import org.apache.commons.httpclient.methods.PostMethod;
import org.apache.commons.httpclient.methods.RequestEntity;
import org.apache.commons.httpclient.params.HttpConnectionManagerParams;
import org.apache.commons.httpclient.params.HttpMethodParams;


import java.io.UnsupportedEncodingException;
import java.net.SocketTimeoutException;

/**
 * https/https报文发送处理类
 */
public class HttpUtil {

    private final static int HTTP_CONNECTION_TIMEOUT = 15000;
    private final static int HTTP_SO_TIMEOUT = 30000;
    private final static boolean HTTP_STABLE_CHECK_ENABLED = true;
    private final static boolean HTTP_TCP_NO_DELAY = true;
    private final static int HTTP_DEFAULT_MAX_CONNECTIONS_PER_HOST = 100;
    private final static int HTTP_MAX_TOTAL_CONNECTIONS = 1000;
	private final static String HTTP_CONTENT_ENCODING = "utf-8";
    private static final HttpConnectionManager connectionManager;
    private static final HttpClient client;

    static {
    	HttpConnectionManagerParams params = loadHttpConfFromFile();
    	connectionManager = new MultiThreadedHttpConnectionManager();
        connectionManager.setParams(params);
        client = new HttpClient(connectionManager);
    }
    
    private static HttpConnectionManagerParams loadHttpConfFromFile(){
		HttpConnectionManagerParams params = new HttpConnectionManagerParams();
        params.setConnectionTimeout(HTTP_CONNECTION_TIMEOUT);
        params.setSoTimeout(HTTP_SO_TIMEOUT);
        params.setStaleCheckingEnabled(HTTP_STABLE_CHECK_ENABLED);
        params.setTcpNoDelay(HTTP_TCP_NO_DELAY);
        params.setDefaultMaxConnectionsPerHost(HTTP_DEFAULT_MAX_CONNECTIONS_PER_HOST);
        params.setMaxTotalConnections(HTTP_MAX_TOTAL_CONNECTIONS);
        params.setParameter(HttpMethodParams.RETRY_HANDLER, new DefaultHttpMethodRetryHandler(0, false));
		return params;
    }
    
	public static String post(String url, String encoding, String content) {
		try {
			byte[] resp = post(url, content.getBytes(encoding));
			if (null == resp)
				return null;
			return new String(resp, encoding);
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
			return null;
		}
	}
    
    
	public static String post(String url, String content) {
    	return post(url, HTTP_CONTENT_ENCODING, content);
    }


    public static byte[] post(String url, byte[] content) {
		try {
			byte[] ret = post(url, new ByteArrayRequestEntity(content));
			return ret;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
    }

    public static byte[] post(String url, RequestEntity requestEntity) throws Exception {
        PostMethod method = new PostMethod(url);
        method.addRequestHeader("Connection", "Keep-Alive");
        method.getParams().setCookiePolicy(CookiePolicy.IGNORE_COOKIES);
        method.getParams().setParameter(HttpMethodParams.RETRY_HANDLER, new DefaultHttpMethodRetryHandler(0, false));
        method.setRequestEntity(requestEntity);
        method.addRequestHeader("Content-Type","application/x-www-form-urlencoded");
        try {
            int statusCode = client.executeMethod(method);
            if (statusCode != HttpStatus.SC_OK) {
    			      System.err.println("httpCode=" + statusCode);
                return method.getResponseBody();
            }
            return method.getResponseBody();
        } catch (SocketTimeoutException e) {
			    e.printStackTrace();
        	return null;
        } catch (Exception e) {
			    e.printStackTrace();
        	return null;
        } finally {
            method.releaseConnection();
        }
    }
}

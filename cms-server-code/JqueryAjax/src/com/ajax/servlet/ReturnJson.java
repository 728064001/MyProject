package com.ajax.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

public class ReturnJson extends HttpServlet {

	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		req.setCharacterEncoding("utf-8");
		resp.setCharacterEncoding("utf-8");
//		resp.setContentType("text/x-json;charset=UTF-8");
//		StringBuffer jsonBuf = new StringBuffer();
//		char[] buf = new char[1];
//		int len = 1;
//		BufferedReader reader = req.getReader();
//		while((len=reader.read(buf))!=-1){
//			jsonBuf.append(buf);
//		}
//		String jsonStr = jsonBuf.toString();
//		System.out.print(jsonStr);
		
//		
		
		
		//get outputstream
		PrintWriter pr = resp.getWriter();
		/*
		 * create json Object;
		 */
		JSONObject j = new JSONObject();
		j.put("status", "huiii");
		
		pr.print(j);
		System.out.println(j);
		pr.flush();
		pr.close();
	}
	
	
}

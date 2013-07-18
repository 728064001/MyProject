package com.json.servlets;

import java.io.BufferedReader;
import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONObject;

public class JsonServlet extends HttpServlet {

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		this.doPost(req, resp);
	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		req.setCharacterEncoding("utf-8");
		StringBuffer jsonBuf = new StringBuffer();
		char[] buf = new char[1];
		int len = 1;
		BufferedReader reader = req.getReader();
		while((len=reader.read(buf))!=-1){
			jsonBuf.append(buf);
		}
		String jsonStr = jsonBuf.toString();
		System.out.print(jsonStr);
//		 JSONObject jsonobject=JSONObject.fromObject(jsonStr);
//		 System.out.println(jsonobject.get("myname")+" "+jsonobject.get("myage")+" "+jsonobject.get("myaddress"));
	}
	
}

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
		
		
		
		
		//get outputstream
		PrintWriter pr = resp.getWriter();
		/*
		 * create json Object;
		 */
//		
//		JSONObject jsonobject = new JSONObject();
//		jsonobject.put("username", "狮子");
//		jsonobject.put("age",21);
//		jsonobject.put("address", "shenzhen");
//		
		JSONObject jsonobject = new JSONObject();
		
		JSONArray jsonarray = new JSONArray();
		
		jsonobject.put("page",1);
		jsonobject.put("total",50);
		jsonobject.put("records", 100);
		
//		JSONObject cell = new JSONObject();
//		cell.put("id", 1);
//		cell.put("name", "shitou");
//		cell.put("address", "shenzhen");
//		jsonarray.add(cell);
		
		for(int i =0;i<=100;i++){
			JSONObject cell = new JSONObject();
			cell.put("id", 1);
			cell.put("name", "shitou");
			cell.put("address", "shenzhen");
			jsonarray.add(cell);
		}
		
//		JSONObject cell2 = new JSONObject();
//		cell2.put("id", 2);
//		cell2.put("name", "lion");
//		cell2.put("address", "shenzhen");
//		jsonarray.add(cell2);
//		
//		JSONObject cell3 = new JSONObject();
//		cell3.put("id", 3);
//		cell3.put("name", "xiaoxiao");
//		cell3.put("address", "shenzhen");
//		jsonarray.add(cell3);
//		
//		JSONObject cell4 = new JSONObject();
//		cell4.put("id", 4);
//		cell4.put("name", "haolei");
//		cell4.put("address", "shenzhen");
//		jsonarray.add(cell4);
		
		
		jsonobject.put("rows", jsonarray);
		pr.print(jsonobject);
		System.out.println(jsonobject);
		pr.flush();
		pr.close();
	}
	
	
}

package com.json.servlets;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONObject;

public class ReturnJson extends HttpServlet {

	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp)
			 {
		// TODO Auto-generated method stub
//		System.out.println("input Method");
//		req.setCharacterEncoding("utf-8");
//		resp.setCharacterEncoding("utf-8");
//		int len;
//		char[] ch = new char[1];
//		StringBuffer sbf = new StringBuffer();
//		BufferedReader br = req.getReader();
//		while((len=br.read(ch))!=-1){
//			sbf.append(ch);
//		}
//		System.out.println(sbf.toString());
		Date date = new Date();
		long time = date.getTime();
		Long l = new Long(time);
//		String asdf = new String(time);
		
		try{
			Object o = getClientData(req,resp);
			String str = ((StringBuffer)o).toString();
			System.out.println("Servlet 收到数据：");
			System.out.println(str);
			System.out.println("Servlet正在返回JSON：。。。");
			
			System.out.println(new String(l.toString()));
			returnJson(req,resp);
		}catch(Exception e){
			e.printStackTrace();
		}
	}
	
	public Object getClientData(HttpServletRequest req, HttpServletResponse resp)throws Exception{
		System.out.println("input Method");
		StringBuffer sbf;
		BufferedReader br;
			req.setCharacterEncoding("utf-8");
			resp.setCharacterEncoding("utf-8");
			int len;
			char[] ch = new char[1];
			sbf = new StringBuffer();
			br = req.getReader();
			while((len=br.read(ch))!=-1){
				sbf.append(ch);
			}
			br.close();
			return sbf;
	}
	
	public void returnJson(HttpServletRequest req, HttpServletResponse resp){
		JSONObject jo = new JSONObject();
		jo.put("username", "郝磊");
		jo.put("age", 21);
		jo.put("address","shenzhen");
		PrintWriter out = null;
		try {
			out = resp.getWriter();
			out.print(jo);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally{
			out.flush();
			out.close();
		}
	}
}

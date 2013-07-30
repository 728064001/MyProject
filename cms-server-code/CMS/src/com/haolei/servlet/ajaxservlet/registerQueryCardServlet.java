package com.haolei.servlet.ajaxservlet;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONObject;

import com.haolei.dao.ajaxdao.queryCardDAO;
import com.haolei.entity.Person;

public class registerQueryCardServlet extends HttpServlet {

	@Override
	protected void service(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");
		Person person = new Person();
		queryCardDAO qc = new queryCardDAO();
		PrintWriter pr = response.getWriter();
		JSONObject js = new JSONObject();
		
		//接收card
		//接收 tel ajax
		StringBuffer jsonBuf = new StringBuffer();
		char[] buf = new char[1];
		int len = 1;
		BufferedReader reader = request.getReader();
		while((len=reader.read(buf))!=-1){
			jsonBuf.append(buf);
		}
		String Str = jsonBuf.toString();
		person.setCard(Str);
		boolean o = qc.querycard(person);
		if(o==true){
			js.put("status", "yes");
			pr.print(js);
		}else{
			js.put("status", "no");
			pr.print(js);
		}
		pr.flush();
		pr.close();
	}
	
}

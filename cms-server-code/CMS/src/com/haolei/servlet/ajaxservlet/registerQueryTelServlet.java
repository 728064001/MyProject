package com.haolei.servlet.ajaxservlet;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONObject;

import com.haolei.dao.ajaxdao.queryTelDAO;
import com.haolei.entity.Person;

public class registerQueryTelServlet extends HttpServlet {

	@Override
	protected void service(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");
		Person person = new Person();
		queryTelDAO qt = new queryTelDAO();
		PrintWriter pr = response.getWriter();
		
		person.setTel(request.getParameter("tel"));
		boolean o= qt.querytel(person);

		if(o){
			JSONObject js = new JSONObject();
			js.put("status", "yes");
			pr.print(js);
		}else{
			JSONObject js = new JSONObject();
			js.put("status", "no");
			pr.print(js);
		}
		pr.close();
	}
	
}

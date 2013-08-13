package com.haolei.servlet.ajaxservlet;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONObject;

import com.haolei.dao.ajaxdao.UpdataPersonInfoQueryTelDAO;
import com.haolei.entity.Person;

public class UpdataPersonInfoQueryTelServlet extends HttpServlet {
	@Override
	protected void service(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");
		PrintWriter pr = response.getWriter();
		Person person = new Person();
		UpdataPersonInfoQueryTelDAO updatapersoninfoqueryteldao = new UpdataPersonInfoQueryTelDAO();
		person.setUuid(request.getParameter("uuid"));
		person.setTel(request.getParameter("tel"));
	
		boolean o = updatapersoninfoqueryteldao.queryTel(person);
		if(o){
			JSONObject js = new JSONObject();
			js.put("status", "yes");
			pr.print(js);
		}else{
			JSONObject js = new JSONObject();
			js.put("status", "no");
			pr.print(js);
		}
		pr.flush();
		pr.close();
	}			
}

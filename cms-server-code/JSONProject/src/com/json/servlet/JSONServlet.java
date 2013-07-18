package com.json.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.json.service.JsonService;
import com.json.tools.JsonTools;

public class JSONServlet extends HttpServlet {

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		this.doPost(req, resp);
	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		req.setCharacterEncoding("UTF-8");
		resp.setCharacterEncoding("UTF-8");
		String jsonstring = "";
		PrintWriter pr = resp.getWriter();	
		JsonService jsonservice = new JsonService();
		String requestString = req.getParameter("r");
		if(requestString.equals("person")){
			jsonstring = JsonTools.createJsonString("person",jsonservice.getPerson());
			pr.print(jsonstring);
		}else if(requestString.equals("personlist")){
			jsonstring = JsonTools.createJsonString("ListPerson",jsonservice.getListPerson());
			pr.print(jsonstring);
		}else if(requestString.equals("liststringperson")){
			jsonstring = JsonTools.createJsonString("ListStringPerson",jsonservice.getListStringPerson());
			pr.print(jsonstring);
		}else if(requestString.equals("listmapstringperson")){
			jsonstring = JsonTools.createJsonString("ListMapStringPerson",jsonservice.getListMapStringPerson());
			pr.print(jsonstring);
		}
		
//		jsonstring = JsonTools.createJsonString("person",jsonservice.getListMapStringPerson());
//		pr.print(jsonstring);		
		
		pr.flush();
		pr.close();
	}
	
}

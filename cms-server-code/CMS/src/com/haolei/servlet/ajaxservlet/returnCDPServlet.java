package com.haolei.servlet.ajaxservlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import com.haolei.dao.CompanyNameListDAO;
import com.haolei.dao.DepNameListDAO;
import com.haolei.dao.PostNameListDAO;

public class returnCDPServlet extends HttpServlet {
	/*
	 * 返回一个json数据，包括公司、部门、职位。
	 * @see javax.servlet.http.HttpServlet#service(javax.servlet.http.HttpServletRequest, javax.servlet.http.HttpServletResponse)
	 */
	@Override
	protected void service(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");
			PrintWriter pr = response.getWriter();
			//get compay list;
			CompanyNameListDAO companynamelistdao = new CompanyNameListDAO();
			List companynamelist = companynamelistdao.returnCompanyNameList();
			//get dep list;
			DepNameListDAO depnamelistdao = new DepNameListDAO();
			List depnamelist = depnamelistdao.returnDepNameList();
			//get post lsit;
			PostNameListDAO postnamelistdao = new PostNameListDAO();
			List psotnamelist = postnamelistdao.returnPostNameList();
			
			//组装JSON
			JSONObject CDPjson = new JSONObject();
			
			JSONArray comparray = new JSONArray();
			JSONObject compobj = null;
			for(int i =0;i<companynamelist.size();i++){
				compobj = new JSONObject();
				compobj.put("name", companynamelist.get(i));
				comparray.add(compobj);
			}
			
			JSONArray deparray = new JSONArray();
			JSONObject depobj = null;
			for(int i=0;i<depnamelist.size();i++){
				depobj = new JSONObject();
				depobj.put("name", depnamelist.get(i));
				deparray.add(depobj);
			}
			
			
			JSONArray postarray = new JSONArray();
			JSONObject postobj = null;
			for(int i=0;i<psotnamelist.size();i++){
				postobj = new JSONObject();
				postobj.put("name", psotnamelist.get(i));
				postarray.add(postobj);
			}
			
			
			CDPjson.put("company", comparray);
			CDPjson.put("dep", deparray);
			CDPjson.put("post", postarray);
			
			if((request.getParameter("args")).equals("09s")){
				pr.print(CDPjson);
				pr.flush();
				pr.close();
			}else{
				pr.print("please access home");
				pr.flush();
				pr.close();
			}
	}
}

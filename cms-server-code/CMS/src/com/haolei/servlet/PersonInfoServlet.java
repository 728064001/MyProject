package com.haolei.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import com.haolei.dao.ManagerPersonInfoDAO;
import com.haolei.entity.Company;
import com.haolei.entity.Dep;
import com.haolei.entity.Person;
import com.haolei.entity.Post;

public class PersonInfoServlet extends HttpServlet {

	@Override
	protected void service(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");
		PrintWriter pr = response.getWriter();
//		//计数
		int nowpage = Integer.parseInt(request.getParameter("nopage"));//当前页
		int pagetop = Integer.parseInt(request.getParameter("pagetop"));//每页显示多少行
//		
//		int st = nowpage*pagetop;
//		int et = pagetop;
		System.out.println("当前页："+nowpage);
		String uuid = request.getParameter("uuid");
		String username = request.getParameter("username");
		String sex = request.getParameter("sex");
		String company = request.getParameter("comp");
		String dep = request.getParameter("dep");
		String post = request.getParameter("post");
		String card = request.getParameter("card");
		String tel = request.getParameter("tel");
		
		Person person = new Person();
		person.setUuid(uuid);
		person.setUsername(username);
		person.setSex(sex);
		person.setTel(tel);
		person.setCard(card);
		
		Dep de = new Dep();
		de.setDep(dep);
		
		Company com = new Company();
		com.setCompanyName(company);
		
		Post pos = new Post();
		pos.setPost(post);
		
		ManagerPersonInfoDAO managerpersoninfodao = new ManagerPersonInfoDAO();
		JSONObject personjson = managerpersoninfodao.returnPersonInfo(person, com, de, pos, nowpage, pagetop);
		pr.print(personjson);
	}
}

package com.haolei.servlet.ajaxservlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONObject;

import com.haolei.dao.ajaxdao.UpdataPersonInfoDAO;
import com.haolei.entity.Company;
import com.haolei.entity.Dep;
import com.haolei.entity.Person;
import com.haolei.entity.Post;

public class UpdataPersonInfoServlet extends HttpServlet {

	@Override
	protected void service(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");
		PrintWriter pr = response.getWriter();
		UpdataPersonInfoDAO updatapersoninfodao = new UpdataPersonInfoDAO();
		Person person = new Person();
		Company company = new Company();
		Dep dep = new Dep();
		Post post = new Post();
		person.setUuid(request.getParameter("uuid"));
		person.setUsername(request.getParameter("username"));
		person.setSex(request.getParameter("sex"));
		person.setAge(Integer.parseInt(request.getParameter("age")));
		person.setIcq(request.getParameter("qq"));
		person.setTel(request.getParameter("tel"));
		person.setBrithday(request.getParameter("brithday"));
		person.setCard(request.getParameter("card"));
		company.setCompanyName(request.getParameter("company"));
		dep.setDep(request.getParameter("dep"));
		post.setPost(request.getParameter("post"));
		System.out.println("uuid:"+request.getParameter("uuid"));
		System.out.println("username:"+request.getParameter("username"));
		System.out.println("sex:"+request.getParameter("sex"));
		System.out.println("age:"+request.getParameter("age"));
		System.out.println("qq:"+request.getParameter("qq"));
		System.out.println("company:"+request.getParameter("company"));
		System.out.println("tel:"+request.getParameter("tel"));
		System.out.println("brithday:"+request.getParameter("brithday"));
		System.out.println("card:"+request.getParameter("card"));
		System.out.println("dep:"+request.getParameter("dep"));
		System.out.println("post:"+request.getParameter("post"));
		int args = updatapersoninfodao.updataperson(person, company, dep, post);
		if(args == 1){
			JSONObject j = new JSONObject();
			j.put("status", "yes");
			pr.print(j);
		}else{
			JSONObject j = new JSONObject();
			j.put("status", "no");
			pr.print(j);			
		}
		pr.flush();
		pr.close();
	}
	
}

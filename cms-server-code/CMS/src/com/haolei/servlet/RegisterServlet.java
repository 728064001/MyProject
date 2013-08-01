package com.haolei.servlet;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.haolei.dao.RegisterDAO;
import com.haolei.entity.Company;
import com.haolei.entity.Dep;
import com.haolei.entity.Person;
import com.haolei.entity.Post;
import com.haolei.tools.CreateUUID;

public class RegisterServlet extends HttpServlet {

	@Override
	protected void service(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");
		//从register页面表单中获取注册信息，保存到相关的实体类
		Person person = new Person();
		person.setUuid(CreateUUID.createuuid());
		person.setUsername(request.getParameter("username"));
		person.setPassword(request.getParameter("password"));
		person.setSex(request.getParameter("sex"));
		person.setTel(request.getParameter("tel"));
		person.setIcq(request.getParameter("qq"));
		person.setBrithday(request.getParameter("brithday"));
		person.setAge(Integer.parseInt(request.getParameter("age")));
		person.setCard(request.getParameter("card"));
		person.setIsadmin("普通用户");
		person.setImagepath("");
		
		Company company = new Company();
		company.setCompanyName(request.getParameter("comp"));
		
		Dep dep = new Dep();
		dep.setDep(request.getParameter("dep"));
		
		Post post = new Post();
		post.setPost(request.getParameter("post"));
		
		RegisterDAO registerdao = new RegisterDAO();
		Boolean args = registerdao.register(person, company, dep, post);
		if(args){
			RequestDispatcher rd = request.getRequestDispatcher("registersuccess.jsp");
			rd.forward(request, response);
		}else{
			response.sendRedirect("ERROR.jsp");
		}
		
	}
	
}

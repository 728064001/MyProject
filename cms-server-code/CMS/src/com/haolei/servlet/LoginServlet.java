package com.haolei.servlet;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.haolei.dao.LoginDAO;
import com.haolei.entity.Person;

public class LoginServlet extends HttpServlet {

	@Override
	protected void service(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");
		HttpSession session = request.getSession();
		LoginDAO logindao = new LoginDAO();
		Person person = new Person();
		person.setUsername(request.getParameter("username"));
		person.setPassword(request.getParameter("password"));
		person.setTel(request.getParameter("tel"));
		String ipaddr = request.getRemoteAddr();
		boolean flag = logindao.login(person);
		
		if(flag){
			session.setAttribute("logined", person);
			session.setAttribute("ip", ipaddr);
			RequestDispatcher rd = request.getRequestDispatcher("index.jsp");
			rd.forward(request, response);
		}else{
			response.sendRedirect("ERROR.jsp");
		}
	}
	
}
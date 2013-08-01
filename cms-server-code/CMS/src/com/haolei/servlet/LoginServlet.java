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
		int flag = logindao.login(person);
		String identity = request.getParameter("useridentity");
		if((flag==0||flag==1) && identity.equals("普通用户")){
			System.out.println("yes");
			session.setAttribute("logined", person);
			session.setAttribute("ip", ipaddr);
			RequestDispatcher rd = request.getRequestDispatcher("index.jsp");
			rd.forward(request, response);
		}else if(flag==1 && identity.equals("管理员")){
			session.setAttribute("adminlogined", person);
			session.setAttribute("adminip", ipaddr);
			RequestDispatcher rd = request.getRequestDispatcher("admin.jsp");
			rd.forward(request, response);
		}else{
			response.sendRedirect("ERROR.jsp");
		}
	}
}

package com.ajax.db;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import com.ajax.db.*;

public class ReturnQueryData extends HttpServlet {

	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		Connection conn = DBconn.getconn();
		PreparedStatement pstm = null;
		ResultSet res = null;
		
		req.setCharacterEncoding("UTF-8");
		resp.setCharacterEncoding("UTF-8");
		PrintWriter pw = resp.getWriter();

		JSONObject jso = new JSONObject();
		JSONArray jsa = new JSONArray();
		JSONObject cell = new JSONObject();
		//计算页数和分页
		int page = Integer.parseInt(req.getParameter("page"));//得到当前页
		int rows = Integer.parseInt(req.getParameter("rows"));//得到每页显示行数
		
		//查询数据库中的数据行数
		int dbrows = 0;
		String getTotalRowsToDb = "select count(*) from userinfo";
		try {
			pstm = conn.prepareStatement(getTotalRowsToDb);
			res = pstm.executeQuery();
			while(res.next()){
				dbrows = res.getInt(1);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally{
			DBconn.CloseConn(conn, pstm, res);
		}
		//计算总页数
		int totalPage = dbrows%rows == 0 ? dbrows/rows : (dbrows/rows)+1;
		jso.put("page",page);
		jso.put("total",totalPage);
		jso.put("records", dbrows);

		String sqlstr = "select * from userinfo";
				try {
					pstm = conn.prepareStatement(sqlstr);
					res = pstm.executeQuery();
					while(res.next()){
						//System.out.println("id:"+res.getInt(1)+", name:"+res.getString(2)+", class:"+res.getString(3)+", age:"+res.getInt(4)+", sex:"+res.getString(5)+", address:"+res.getString(6));
						cell.put("id", res.getInt(1));
						cell.put("name", res.getString(2));
						cell.put("class", res.getString(3));
						cell.put("age", res.getInt(4));
						cell.put("sex", res.getString(5));
						cell.put("address", res.getString(6));
						jsa.add(cell);
					}
					jso.put("rows", jsa);
					System.out.println(jso);
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}finally{
					DBconn.CloseConn(conn, pstm, res);
				}
		
		pw.print(jso);
		pw.flush();
		pw.close();
	}
	
}

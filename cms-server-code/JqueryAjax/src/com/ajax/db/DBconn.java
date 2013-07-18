package com.ajax.db;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class DBconn {
	private static String DRIVER = "com.mysql.jdbc.Driver";
	private static String URL = "jdbc:mysql://localhost:3306/pagination";
	private static String NAME = "root";
	private static String PASS	= "zyeeda";
	
	public static Connection conn;
	public static PreparedStatement pstm;
	public static ResultSet res;
	
	public static Connection getconn(){
		try{
			Class.forName(DRIVER);
			conn = DriverManager.getConnection(URL,NAME,PASS);
		}catch(Exception e){
			e.printStackTrace();
		}
		return conn;
	}
	
	public static void CloseConn(Connection conn,PreparedStatement pstm, ResultSet res){
		try {
			if(res!=null){res.close();}
			if(pstm!=null){res.close();}
			if(conn!=null){res.close();}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
}

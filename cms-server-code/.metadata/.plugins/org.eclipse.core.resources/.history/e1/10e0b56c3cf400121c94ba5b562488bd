package com.haolei.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class Dbconn {
	private static String DRIVER = "com.mysql.jdbc.Driver";
	private static String URL = "jdbc:mysql://localhost:3306/cms_db";
	private static String NAME = "root";
	private static String PASS	= "zyeeda";
	
	public static Connection conn = null;
	public static PreparedStatement pstm=null;
	public static ResultSet res=null;
	
	public static Connection getconn(){
		try{
			Class.forName(DRIVER);
			conn = DriverManager.getConnection(URL,NAME,PASS);
		}catch(Exception e){
			
		}
		return conn;
	}
	
	public static void closeALL(Connection conn,PreparedStatement pstm, ResultSet res){
		try {
			if(res!=null){res.close();}
			if(pstm!=null){pstm.close();}
			//if(conn!=null){conn.close();}
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
}

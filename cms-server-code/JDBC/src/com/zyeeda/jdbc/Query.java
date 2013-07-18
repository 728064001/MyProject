package com.zyeeda.jdbc;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

public class Query {
	public static void main(String[] args) {
		
		JSONObject jso = new JSONObject();
		JSONArray jsa = new JSONArray();
		JSONObject cell = new JSONObject();
		
		Connection conn = DbConn.getconn();
		PreparedStatement pstm = null;
		ResultSet res = null;
		String sqlstr = "select * from userinfo";
		try {
			pstm = conn.prepareStatement(sqlstr);
			res = pstm.executeQuery();
			
			while(res.next()){
//				System.out.println("id:"+res.getInt(1)+", name:"+res.getString(2)+", class:"+res.getString(3)+", age:"+res.getInt(4)+", sex:"+res.getString(5)+", address:"+res.getString(6));
				
				
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
			DbConn.closeALL(conn, pstm, res);
		}
		
	}
}

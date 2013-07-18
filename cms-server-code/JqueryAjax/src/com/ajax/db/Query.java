package com.ajax.db;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import com.ajax.db.*;

public class Query {
	static JSONObject jso = new JSONObject();
	static JSONArray jsa = new JSONArray();
	static JSONObject cell = new JSONObject();
//	jso.put("page",1);
//	jsonobject.put("total",50);
//	jsonobject.put("records", 100);
	static Connection conn = DBconn.getconn();
	static PreparedStatement pstm = null;
	static ResultSet res = null;
	static String sqlstr = "select * from userinfo";
	public static JSONObject queryData(){
			try {
				pstm = conn.prepareStatement(sqlstr);
				res = pstm.executeQuery();
				while(res.next()){
		//			System.out.println("id:"+res.getInt(1)+", name:"+res.getString(2)+", class:"+res.getString(3)+", age:"+res.getInt(4)+", sex:"+res.getString(5)+", address:"+res.getString(6));
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
			return jso;
		
	}
}

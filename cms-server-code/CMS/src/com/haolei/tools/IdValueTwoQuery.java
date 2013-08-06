package com.haolei.tools;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import com.haolei.dao.Dbconn;

public class IdValueTwoQuery {
	/*
	 * 这个类中有两个方法
	 * 方法一：
	 * 		根据名称查id
	 * 
	 * 
	 * 方法二：
	 * 		根据id查名称
	 * 
	 * 表：company_tab,dep_tab,post_tab
	 * 
	 */
	public int valueQueryId(String tabName, String value){
		Connection conn = Dbconn.getconn();
		PreparedStatement pstm = null;
		ResultSet res = null;
		int returnNum = 0;
		if(tabName.equals("company")){
			String queryCompanyidStr = "select id from Company_tab where companyname = ?";
			int companyid=0;
			try{
				pstm = conn.prepareStatement(queryCompanyidStr);
				pstm.setString(1, value);
				res = pstm.executeQuery();
				while(res.next()){
					companyid = res.getInt(1);
				}
				returnNum = companyid;
			}catch(Exception e){
				e.printStackTrace();
			}finally{
				Dbconn.closeALL(conn, pstm, res);
			}
		}else if(tabName.equals("dep")){
			String queryDepidStr = "select id from dep_tab where dep = ?";
			int depid=0;
			try{
				pstm = conn.prepareStatement(queryDepidStr);
				pstm.setString(1, value);
				res = pstm.executeQuery();
				while(res.next()){
					depid = res.getInt(1);
				}
				returnNum = depid;
			}catch(Exception e){
				e.printStackTrace();
			}finally{
				Dbconn.closeALL(conn, pstm, res);
			}
		}else if(tabName.equals("post")){
			String querypostidStr = "select id from post_tab where post = ?";
			int postid=0;
			try{
				pstm = conn.prepareStatement(querypostidStr);
				pstm.setString(1, value);
				res = pstm.executeQuery();
				while(res.next()){
					postid = res.getInt(1);
				}
				returnNum = postid;
			}catch(Exception e){
				e.printStackTrace();
			}finally{
				Dbconn.closeALL(conn, pstm, res);
			}
		}
		return returnNum;
	}
	
	public String IdQueryValue(String tabName, int id){
		Connection conn = Dbconn.getconn();
		PreparedStatement pstm = null;
		ResultSet res = null;
		String returnStr = "";
		if(tabName.equals("company")){
			String queryCompanynameStr = "select companyname from Company_tab where id = ?";
			String companyname = "";
			try{
				pstm = conn.prepareStatement(queryCompanynameStr);
				pstm.setInt(1, id);
				res = pstm.executeQuery();
				while(res.next()){
					companyname = res.getString(1);
				}
				returnStr = companyname;
			}catch(Exception e){
				e.printStackTrace();
			}finally{
				Dbconn.closeALL(conn, pstm, res);
			}
		}else if(tabName.equals("dep")){
			String querydepnameStr = "select dep from dep_tab where id = ?";
			String depname = "";
			try{
				pstm = conn.prepareStatement(querydepnameStr);
				pstm.setInt(1, id);
				res = pstm.executeQuery();
				while(res.next()){
					depname = res.getString(1);
				}
				returnStr = depname;
			}catch(Exception e){
				e.printStackTrace();
			}finally{
				Dbconn.closeALL(conn, pstm, res);
			}
		}else if(tabName.equals("post")){
			String querypostnameStr = "select post from post_tab where id = ?";
			String postname = "";
			try{
				pstm = conn.prepareStatement(querypostnameStr);
				pstm.setInt(1, id);
				res = pstm.executeQuery();
				while(res.next()){
					postname = res.getString(1);
				}
				returnStr = postname;
			}catch(Exception e){
				e.printStackTrace();
			}finally{
				Dbconn.closeALL(conn, pstm, res);
			}
		}
		
		return returnStr;
	}
	
	/*
	 * test
	 */
	public static void main(String[] args) {
		IdValueTwoQuery iq = new IdValueTwoQuery();
		System.out.println(iq.IdQueryValue("company", 2));
	}
}

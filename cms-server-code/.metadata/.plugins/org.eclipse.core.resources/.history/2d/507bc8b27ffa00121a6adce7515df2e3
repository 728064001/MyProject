package com.haolei.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import com.haolei.entity.Person;

public class LoginDAO {
	public int login(Person person){
		Connection conn = Dbconn.getconn();
		PreparedStatement pstm = null;
		ResultSet res = null;
		int returnnum = 0;  //登录失败返回-1，登录成功是普通用户返回0，登录成功是管理员返回1;
		int num = 0;
		String admin = "";
		String loginStr = "select count(*) from person_tab where username = ? and password = ? and tel = ?";
		String isadminStr = "select isadmin from person_tab where username = ? and password = ? and tel = ?";
		try{
			pstm = conn.prepareStatement(loginStr);
			pstm.setString(1, person.getUsername());
			pstm.setString(2, person.getPassword());
			pstm.setString(3,person.getTel());
			res = pstm.executeQuery();
			while(res.next()){
				num = res.getInt(1);
			}
		}catch(Exception e){
			e.printStackTrace();
		}finally{
			Dbconn.closeALL(conn, pstm, res);
		}
		
		try{
			pstm = conn.prepareStatement(isadminStr);
			pstm.setString(1, person.getUsername());
			pstm.setString(2, person.getPassword());
			pstm.setString(3,person.getTel());
			res = pstm.executeQuery();
			while(res.next()){
				admin = res.getString(1);
			}
		}catch(Exception e){
			e.printStackTrace();
		}finally{
			Dbconn.closeALL(conn, pstm, res);
		}
		if(num==1 && admin.equals("普通用户")){
			return 0;
		}else if(num==1 && admin.equals("管理员")){
			return 1;
		}
		return -1;
	}
	
	//test
	public static void main(String[] args) {
		LoginDAO ld = new LoginDAO();
		Person p = new Person();
		p.setUsername("米格");
		p.setPassword("11111111");
		p.setTel("13971863594");
		System.out.println(ld.login(p));
	}
}

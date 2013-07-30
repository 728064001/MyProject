package com.haolei.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import com.haolei.entity.Person;

public class LoginDAO {
	public boolean login(Person person){
		Connection conn = Dbconn.getconn();
		PreparedStatement pstm = null;
		ResultSet res = null;
		int num = 0;
		String loginStr = "select count(*) from person_tab where username = ? and password = ? and tel = ?";
		try{
			pstm = conn.prepareStatement(loginStr);
			pstm.setString(1, person.getUsername());
			pstm.setString(2, person.getPassword());
			pstm.setString(3,person.getTel());
			res = pstm.executeQuery();
			while(res.next()){
				num = res.getInt(1);
			}
			if(num == 1 ){
				return true;
			}
		}catch(Exception e){
			e.printStackTrace();
		}finally{
			Dbconn.closeALL(conn, pstm, res);
		}
		return false;
	}
	
	//test
	public static void main(String[] args) {
		LoginDAO ld = new LoginDAO();
		Person p = new Person();
		p.setUsername("郝磊");
		p.setPassword("11111111");
		p.setTel("15815523495");
		
		System.out.println(ld.login(p));
	}
}
package com.haolei.dao.ajaxdao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import com.haolei.dao.Dbconn;
import com.haolei.entity.Person;

public class queryTelDAO {
	public boolean querytel(Person person){
		Connection conn = Dbconn.getconn();
		PreparedStatement pstm = null;
		ResultSet res = null;
		int num = 0;
		String querytelStr = "select count(tel) from person_tab where tel = ?";
		try{
			pstm = conn.prepareStatement(querytelStr);
			pstm.setString(1, person.getTel());
			res = pstm.executeQuery();
			while(res.next()){
				num = res.getInt(1);
			}
			if(num!=0){
				System.out.println("queryTelDAO:tel已存在，不能注册");
				return false;
			}
		}catch(Exception e){
			e.printStackTrace();
		}finally{
			Dbconn.closeALL(conn, pstm, res);
		}
		System.out.println("queryTelDAO:tel可以使用");
		
		return true;
	}
	
	//test
	public static void main(String[] args) {
		queryTelDAO qt = new queryTelDAO();
		Person p = new Person();
		p.setTel("12341234");
		qt.querytel(p);
	}
	
}

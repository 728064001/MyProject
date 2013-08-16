package com.haolei.dao.ajaxdao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import com.haolei.dao.Dbconn;
import com.haolei.entity.Person;

public class queryqqDAO {
	public boolean queryqq(Person person){
		Connection conn = Dbconn.getconn();
		PreparedStatement pstm = null;
		ResultSet res = null;
		int num = 0;
		String queryqqStr = "select count(icq) from person_tab where icq = ?";
		
		try{
			pstm = conn.prepareStatement(queryqqStr);
			pstm.setString(1, person.getIcq());
			res = pstm.executeQuery();
			while(res.next()){
				num = res.getInt(1);
			}
			if(num!=0){
				System.out.println("queryqqDAO:qq号已存在，不能注册");
				return false;
			}
		}catch(Exception e){
			e.printStackTrace();
		}finally{
			Dbconn.closeALL(conn, pstm, res);
		}
		System.out.println("queryqqDAO:qq可以使用");
		return true;
	}	
	
	//test
	public static void main(String[] args) {
		queryqqDAO qq = new queryqqDAO();
		Person p = new Person();
		p.setIcq("72804001");
		qq.queryqq(p);
	}
}

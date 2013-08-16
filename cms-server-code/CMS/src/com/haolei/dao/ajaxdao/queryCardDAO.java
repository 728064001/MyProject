package com.haolei.dao.ajaxdao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import com.haolei.dao.Dbconn;
import com.haolei.entity.Person;

public class queryCardDAO {
	public boolean querycard(Person person){
		Connection conn = Dbconn.getconn();
		PreparedStatement pstm = null;
		ResultSet res = null;
		int num = 0;
		String querycardStr = "select count(card) from person_tab where card = ?";
		
		try{
			pstm = conn.prepareStatement(querycardStr);
			pstm.setString(1, person.getCard());
			res = pstm.executeQuery();
			while(res.next()){
				num = res.getInt(1);
			}
			if(num!=0){
				System.out.println("queryCardDAO:身份证号已存在，不能注册");
				return false;
			}
		}catch(Exception e){
			e.printStackTrace();
		}finally{
			Dbconn.closeALL(conn, pstm, res);
		}
		System.out.println("queryCardDAO:身份证号可以使用");
		return true;
	}
//	test
	public static void main(String[] args) {
		queryCardDAO q = new queryCardDAO();
		Person p = new Person();
		p.setCard("420821199105110017");
		q.querycard(p);
	}
}

package com.haolei.dao.ajaxdao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import com.haolei.dao.Dbconn;
import com.haolei.entity.Person;

public class UpdataPersonInfoQueryCardDAO {
	public boolean queryCard(Person person){
		Connection conn = Dbconn.getconn();
		PreparedStatement pstm = null;
		ResultSet res = null;
		int num = 0;
		String updatapersoninfoquerycardStr = "select count(*) from person_tab where uuid != ? and card = ?";
		try{
			pstm = conn.prepareStatement(updatapersoninfoquerycardStr);
			pstm.setString(1, person.getUuid());
			pstm.setString(2, person.getCard());
			System.out.println("UpdataPersonInfoQueryCardDAO:"+person.getUuid()+"/"+person.getCard());
			res = pstm.executeQuery();
			while(res.next()){
				num = res.getInt(1);
			}
			if(num==0){
				System.out.println("UpdataPersonInfoQueryCardDAO:该身份证可以使用");
				return true;
			}
		}catch(Exception e){
			e.printStackTrace();
		}finally{
			Dbconn.closeALL(conn, pstm, res);
		}
		System.out.println("UpdataPersonInfoQueryCardDAO:该身份证不能使用");
		return false;
	}
}

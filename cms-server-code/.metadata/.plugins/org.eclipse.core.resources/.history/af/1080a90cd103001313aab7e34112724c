package com.haolei.dao.ajaxdao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import com.haolei.dao.Dbconn;
import com.haolei.entity.Person;

public class UpdataPersonInfoQueryTelDAO {
	public boolean queryTel(Person person){
		Connection conn = Dbconn.getconn();
		PreparedStatement pstm = null;
		ResultSet res = null;
		int num = 0;
		String updatapersoninfoquerytelStr = "select count(*) from person_tab where uuid != ? and tel = ?";
		try{
			pstm = conn.prepareStatement(updatapersoninfoquerytelStr);
			pstm.setString(1, person.getUuid());
			pstm.setString(2, person.getTel());
			res = pstm.executeQuery();
			while(res.next()){
				num = res.getInt(1);
				
			}
			if(num == 0 ){
				System.out.println("该电话号码可以使用");
				return true;
			}
		}catch(Exception e){
			e.printStackTrace();
		}finally{
			Dbconn.closeALL(conn, pstm, res);
		}
		System.out.println("该电话号码不能使用");
		return false;
	}
}

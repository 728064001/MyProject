package com.haolei.dao.ajaxdao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import com.haolei.dao.Dbconn;
import com.haolei.entity.Person;

public class UpdataPersonInfoQueryQqDAO {
	public boolean queryQq(Person person){
		Connection conn = Dbconn.getconn();
		PreparedStatement pstm = null;
		ResultSet res = null;
		int num = 0;
		String updatapersoninfoqueryqqStr = "select count(*) from person_tab where uuid != ? and icq = ?";
		try{
			pstm = conn.prepareStatement(updatapersoninfoqueryqqStr);
			pstm.setString(1, person.getUuid());
			pstm.setString(2, person.getIcq());
			res = pstm.executeQuery();
			while(res.next()){
				num = res.getInt(1);
			}
			if(num==0){
				return true;
			}
		}catch(Exception e){
			e.printStackTrace();
		}finally{
			Dbconn.closeALL(conn, pstm, res);
		}
		return false;
	}
}

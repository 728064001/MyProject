package com.haolei.dao.ajaxdao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import com.haolei.dao.Dbconn;
import com.haolei.entity.Company;
import com.haolei.entity.Dep;
import com.haolei.entity.Person;
import com.haolei.entity.Post;
import com.haolei.tools.IdValueTwoQuery;

public class UpdataPersonInfoDAO {
	public int updataperson(Person person, Company company, Dep dep, Post post){
		IdValueTwoQuery idvaluetwoquery = new IdValueTwoQuery();
		Connection conn = Dbconn.getconn();
		PreparedStatement pstm = null;
		ResultSet res = null;
		String updatapersoninfoStr = "update person_tab set username = ?, sex=?, tel=?, icq=?, brithday=?, age=?, card=?, companyid=?, depid=?, postid=? where uuid=? ";
		int num = 0;
		try{
			pstm = conn.prepareStatement(updatapersoninfoStr);
			pstm.setString(1, person.getUsername());
			pstm.setString(2, person.getSex());
			pstm.setString(3, person.getTel());
			pstm.setString(4, person.getIcq());
			pstm.setString(5, person.getBrithday());
			pstm.setInt(6, person.getAge());
			pstm.setString(7, person.getCard());
			pstm.setInt(8, idvaluetwoquery.valueQueryId("company",company.getCompanyName()));
			pstm.setInt(9, idvaluetwoquery.valueQueryId("dep",dep.getDep()));
			pstm.setInt(10, idvaluetwoquery.valueQueryId("post",post.getPost()));
			pstm.setString(11, person.getUuid());
			num = pstm.executeUpdate();
		}catch(Exception e){
			e.printStackTrace();
		}finally{
			Dbconn.closeALL(conn, pstm, res);
		}
		return num;
	}
}

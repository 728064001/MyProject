package com.haolei.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import com.haolei.entity.Company;
import com.haolei.entity.Dep;
import com.haolei.entity.Person;
import com.haolei.entity.Post;
import com.haolei.tools.IdValueTwoQuery;

public class RegisterDAO {
	public boolean register(Person person, Company company, Dep dep, Post post){
		Connection conn = Dbconn.getconn();
		PreparedStatement pstm = null;
		ResultSet res = null;
		IdValueTwoQuery iq = new IdValueTwoQuery();
		//将数据插入Person_tab表中
		String insertPersonStr = "insert into person_tab (uuid,username,password,sex,tel,icq,brithday,age,card,companyid,depid,postid,isadmin,imagepath) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
		int num = 0;
		try{
			pstm = conn.prepareStatement(insertPersonStr);
			//设置数据
			pstm.setString(1, person.getUuid());
			pstm.setString(2, person.getUsername());
			pstm.setString(3, person.getPassword());
			pstm.setString(4, person.getSex());
			pstm.setString(5, person.getTel());
			pstm.setString(6, person.getIcq());
			pstm.setString(7, person.getBrithday());
			pstm.setInt(8, person.getAge());
			pstm.setString(9, person.getCard());
			pstm.setInt(10, iq.valueQueryId("company", company.getCompanyName()));
			pstm.setInt(11, iq.valueQueryId("dep", dep.getDep()));
			pstm.setInt(12, iq.valueQueryId("post", post.getPost()));
			pstm.setString(13, person.getIsadmin());
			pstm.setString(14, person.getImagepath());
			
			num = pstm.executeUpdate();
		}catch(Exception e){
			e.printStackTrace();
			return false;
		}finally{
			Dbconn.closeALL(conn, pstm, null);
		}
		return true;
	}
}

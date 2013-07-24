package com.haolei.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import com.haolei.entity.Company;
import com.haolei.entity.Dep;
import com.haolei.entity.Person;
import com.haolei.entity.Post;

public class RegisterDAO {
	public boolean register(Person person, Company company, Dep dep, Post post){
		Connection conn = Dbconn.getconn();
		PreparedStatement pstm = null;
		ResultSet res = null;
		
		//test
//		System.out.println(person.getBrithday());
//		System.out.println(company.getCompanyName());
		
		
		
		//1.根据Company对象的CompanyName值，在Company_tab中查对应的ID
		String queryCompanyidStr = "select id from Company_tab where companyname = ?";
		int companyid=0;
		try{
			pstm = conn.prepareStatement(queryCompanyidStr);
			pstm.setString(1, company.getCompanyName());
			res = pstm.executeQuery();
			while(res.next()){
				companyid = res.getInt(1);
			}
		}catch(Exception e){
			e.printStackTrace();
			return false;
		}finally{
			Dbconn.closeALL(conn, pstm, res);
		}
		
		//根据Dep对象的dep值，在dep_tab中查询对应id
		String queryDepidStr = "select id from dep_tab where dep = ?";
		int depid=0;
		try{
			pstm = conn.prepareStatement(queryDepidStr);
			pstm.setString(1, dep.getDep());
			res = pstm.executeQuery();
			while(res.next()){
				depid = res.getInt(1);
			}
		}catch(Exception e){
			e.printStackTrace();
			return false;
		}finally{
			Dbconn.closeALL(conn, pstm, res);
		}
		
		//根据Post对象的post值，在post_tab中查询对应的ID
		String querypostidStr = "select id from post_tab where post = ?";
		int postid=0;
		try{
			pstm = conn.prepareStatement(querypostidStr);
			pstm.setString(1, post.getPost());
			res = pstm.executeQuery();
			while(res.next()){
				postid = res.getInt(1);
			}
		}catch(Exception e){
			e.printStackTrace();
			return false;
		}finally{
			Dbconn.closeALL(conn, pstm, res);
		}
		
		
		//test
//		System.out.println(companyid);
//		System.out.println(depid);
//		System.out.println(postid);
		
		//将数据插入Person_tab表中
		String insertPersonStr = "insert into person_tab (uuid,username,password,tel,icq,brithday,age,card,companyid,depid,postid,imagepath) values (?,?,?,?,?,?,?,?,?,?,?,?)";
		int num = 0;
		try{
			pstm = conn.prepareStatement(insertPersonStr);
			//设置数据
			pstm.setString(1, person.getUuid());
			pstm.setString(2, person.getUsername());
			pstm.setString(3, person.getPassword());
			pstm.setString(4, person.getTel());
			pstm.setString(5, person.getIcq());
			pstm.setString(6, person.getBrithday());
			pstm.setInt(7, person.getAge());
			pstm.setString(8, person.getCard());
			pstm.setInt(9, companyid);
			pstm.setInt(10, depid);
			pstm.setInt(11, postid);
			pstm.setString(12, person.getImagepath());
			
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

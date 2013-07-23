package com.haolei.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import com.haolei.entity.Dep;

public class DepNameListDAO {
	public List returnDepNameList()throws Exception{
		Connection conn = Dbconn.getconn();
		PreparedStatement pstm = null;
		ResultSet res = null;
		Dep dep;
		List depList = new ArrayList();
		String queryDepNameStr = "select dep from dep_tab";
		
		pstm = conn.prepareStatement(queryDepNameStr);
		res = pstm.executeQuery();
		
		while(res.next()){
			dep = new Dep();
			dep.setDep(res.getString(1));
			depList.add(dep.getDep());
		}
		
		Dbconn.closeALL(conn, pstm, res);
		
		return depList;
	}
	/**
	 * 
	 * @param test
	 */
	public static void main(String[] args){
		DepNameListDAO depnamelistdao = new DepNameListDAO();
		try {
			List li = depnamelistdao.returnDepNameList();
			System.out.println(li.size());
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}

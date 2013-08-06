package com.haolei.tools;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import com.haolei.dao.Dbconn;

public class queryRecordCount {
	/*
	 * 1.查询符合条件的数据条数
	 * 
	 */
	
	public static int returnCount(String sqlStr){
		Connection conn = Dbconn.getconn();
		PreparedStatement pstm = null;
		ResultSet res = null;
		int returnNum = 0;
		try{
			pstm = conn.prepareStatement(sqlStr);
			res = pstm.executeQuery();
			while(res.next()){
				returnNum = res.getInt(1);
			}
		}catch(Exception e){
			e.printStackTrace();
		}finally{
			Dbconn.closeALL(conn, pstm, res);
		}
		return returnNum;
	}
	/*
	 * TEST
	 */
	public static void main(String[] args) {
		System.out.println(queryRecordCount.returnCount("select id from dep_tab where dep = '行政人事部'"));
	}
	
}

package com.haolei.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import com.haolei.entity.Company;

public class CompanyNameListDAO {
	
	public List returnCompanyNameList(){
		Connection conn = Dbconn.getconn();
		PreparedStatement pstm = null;
		ResultSet res = null;
		Company company = null;
		List companyList = new ArrayList();
		String queryCompanyNameStr = "select companyname from company_tab";
		try{
			pstm = conn.prepareStatement(queryCompanyNameStr);
			res = pstm.executeQuery();
			while(res.next()){
				company = new Company();
				company.setCompanyName(res.getString(1));
				companyList.add(company.getCompanyName());
			}
		}catch(Exception e){
			e.printStackTrace();
		}finally{
			Dbconn.closeALL(conn, pstm, res);
		}
		
		
		return companyList;
	}
	/**
	 * 
	 * @param test
	 */
	public static void main(String[] args) {
		CompanyNameListDAO dnyd = new CompanyNameListDAO();
		List li = dnyd.returnCompanyNameList();
		System.out.println(li.get(0));
	}
}

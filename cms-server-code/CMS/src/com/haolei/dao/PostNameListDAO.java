package com.haolei.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import com.haolei.entity.Post;

public class PostNameListDAO {
	public List returnPostNameList(){
		Connection conn = Dbconn.getconn();
		PreparedStatement pstm = null;
		ResultSet res = null;
		Post post = null;
		List postNameList = new ArrayList();
		String queryPostNameStr = "select post from post_tab";
		try{
			pstm = conn.prepareStatement(queryPostNameStr);
			res = pstm.executeQuery();
			while(res.next()){
				post = new Post();
				post.setPost(res.getString(1));
				postNameList.add(post.getPost());
			}
		}catch(Exception e){
			e.printStackTrace();
		}finally{
			Dbconn.closeALL(conn, pstm, res);
		}
		return postNameList;
	}
}

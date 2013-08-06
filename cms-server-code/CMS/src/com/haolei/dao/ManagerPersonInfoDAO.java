package com.haolei.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import com.haolei.entity.Company;
import com.haolei.entity.Dep;
import com.haolei.entity.Person;
import com.haolei.entity.Post;
import com.haolei.tools.IdValueTwoQuery;
import com.haolei.tools.queryRecordCount;
public class ManagerPersonInfoDAO {
	/*
	 * ajax 查询人员信息
	 */
	public JSONObject returnPersonInfo(Person person, Company com, Dep de, Post pos, int rows, int pages){
		
		Connection conn = Dbconn.getconn();
		PreparedStatement pstm = null;
		ResultSet res = null;
		
		String querypersonStr = "select uuid,username,sex,tel,icq,brithday,age,card,companyid,postid,depid from person_tab where 1 = 1";
		String countStr = "select count(*) from person_tab where 1 = 1";
		IdValueTwoQuery iq = new IdValueTwoQuery();
		JSONObject perjson = new JSONObject();
		JSONArray perary = new JSONArray();
		JSONObject percell = null;
		
		//载入查询条件
		String uuid_args = person.getUuid();
		String username_args = person.getUsername();
		String sex_args = person.getSex();
		String card_args = person.getCard();
		String tel_args = person.getTel();
		int comp_args = iq.valueQueryId("company", (com.getCompanyName()));
		int dep_args = iq.valueQueryId("dep", de.getDep());
		int post_args = iq.valueQueryId("post", pos.getPost());
		System.out.println(uuid_args);
		System.out.println(username_args);
		System.out.println(sex_args);
		System.out.println(card_args);
		System.out.println(tel_args);
		System.out.println(comp_args);
		System.out.println(dep_args);
		System.out.println(post_args);
		//拼装查询语句
		if(!uuid_args.equals("") && uuid_args!="" && uuid_args!=null){
			querypersonStr += "and uuid like '%"+uuid_args+"%'";
			countStr += "and uuid like '%"+uuid_args+"%'";
		}
		if(!username_args.equals("") && username_args!="" && username_args!=null){
			querypersonStr += "and username like '%"+username_args+"%'";
			countStr += "and username like '%"+username_args+"%'";
		}
		if(!sex_args.equals("") && sex_args!="" && !sex_args.equals("--") && sex_args!=null){
			querypersonStr += "and sex = "+sex_args;
			countStr += "and sex = "+sex_args;
		}
		if(!card_args.equals("") && card_args!="" && card_args!=null){
			querypersonStr += "and card = "+card_args;
			countStr += "and card = "+card_args;
		}
		if(!tel_args.equals("") && tel_args!="" && tel_args!=null){
			querypersonStr += "and tel = "+tel_args;
			countStr += "and tel = "+tel_args;
		}
		if(comp_args!=0){
			querypersonStr += "and companyid ="+comp_args;
			countStr += "and companyid ="+comp_args;
		}
		if(dep_args!=0){
			querypersonStr += "and depid ="+dep_args;
			countStr += "and depid ="+dep_args;
		}
		if(post_args!=0){
			querypersonStr += "and postid ="+post_args;
			countStr += "and postid ="+post_args;
		}
		int recordcount = queryRecordCount.returnCount(countStr);
		System.out.println(querypersonStr);
		try{
			pstm = conn.prepareStatement(querypersonStr,ResultSet.TYPE_SCROLL_INSENSITIVE,ResultSet.CONCUR_READ_ONLY);
			pstm.setMaxRows(2);
			res = pstm.executeQuery();
			res.relative(1);
			res.first();
			while(res.next()){
				percell = new JSONObject();
//				System.out.println(res.getString("uuid"));
				percell.put("uuid", res.getString("uuid"));
				percell.put("username", res.getString("username"));
				percell.put("sex", res.getString("sex"));
				percell.put("tel", res.getString("tel"));
				percell.put("icq", res.getString("icq"));
				percell.put("brithday", res.getString("brithday"));
				percell.put("age", res.getInt("age"));
				percell.put("card", res.getString("card"));
				percell.put("company", iq.IdQueryValue("company", res.getInt("companyid")));
				percell.put("dep", iq.IdQueryValue("dep", res.getInt("depid")));
				percell.put("post", iq.IdQueryValue("post", res.getInt("postid")));
				
				perary.add(percell);
			}
			perjson.put("countnum", recordcount);
			perjson.put("personinfo", perary);
		}catch(Exception e){
			e.printStackTrace();
		}finally{
			Dbconn.closeALL(conn, pstm, res);
		}
		
		return perjson;
	}
	/*
	 * 
	 */
	public static void main(String[] args) {
		ManagerPersonInfoDAO mif = new ManagerPersonInfoDAO();
		Person p = new Person();
		p.setUuid("");
		p.setUsername("");
		p.setSex("");
		p.setTel("");
		p.setCard("");
		Company c = new Company();
		c.setCompanyName("");
		Dep d = new Dep();
		d.setDep("");
		Post ps = new Post();
		ps.setPost("");
		JSONObject j = mif.returnPersonInfo(p, c, d, ps, 2, 1);
		System.out.println(j);
	}
}
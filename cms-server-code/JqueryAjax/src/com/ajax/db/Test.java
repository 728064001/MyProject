package com.ajax.db;

public class Test {
	public static void main(String[] args) {
		int page = 1;//当前页数
		int rows = 5;//每页显示行数
		int totalRecord = 30;//数据总行数
		
		//计算总页数
		int totalPage = totalRecord%rows == 0 ? totalRecord/rows : (totalRecord/rows)+1;
		
		int index = (page-1)*rows;
		
		int pageSize = rows;
		
		//构造JSON数据
		String jsonstr = "{total:"+totalPage+",page:"+page+",records:"+totalPage+",rows[";
		for(int i = index;i<pageSize+index&&i<totalRecord;i++){
			jsonstr += "{cell:['ID " + i + "','NAME " + i + "','PHONE " + i + "']}"; 
			if(i!=pageSize+index-1 && i!=totalRecord-1){
				jsonstr += ",";
			}
		}
		
		System.out.println(jsonstr);
	}
}

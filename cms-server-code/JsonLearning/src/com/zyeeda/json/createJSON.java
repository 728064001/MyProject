package com.zyeeda.json;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

public class createJSON {
	public static void main(String[] args) {
		  JSONObject jsonObj = new JSONObject();
          // 根据jqGrid对JSON的数据格式要求给jsonObj赋值
          jsonObj.put("page", 1);                // 当前页
          jsonObj.put("total", 1);        // 总页数
          jsonObj.put("records", 4);        // 总记录数
          // 定义rows，存放数据
          JSONArray rows = new JSONArray();
          // 放入4条数据
          for(int i=0;i<4;i++)
          {
                  // 存放一条记录的对象
                  JSONObject cell = new JSONObject();
                  cell.put("id", i);
                  if(i%2==0)
                  {
                          cell.put("userName", "polaris");
                          cell.put("gender", "女");
                  }
                  else
                  {
                          cell.put("userName", "徐新华");
                          cell.put("gender", "男");
                  }
                  cell.put("email", "polaris@gmail.com");
                  cell.put("QQ", "772"+i+"1837"+i);
                  cell.put("mobilePhone", "132"+i+"1837"+i+"3"+i);
                  cell.put("birthday", "198"+i+"-10-"+"1"+i);
                  // 将该记录放入rows中
                  rows.add(cell);
          }
          // 将rows放入json对象中
          jsonObj.put("rows", rows);
          // 自控制台打印输出，以检验json对象生成是否正确
          System.out.println("要返回的json对象：\n" + jsonObj.toString());
	}
}

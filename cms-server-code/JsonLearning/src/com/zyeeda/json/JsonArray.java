package com.zyeeda.json;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

public class JsonArray {
	public static void main(String[] args) {
		JSONObject jsonobject = new JSONObject();
		JSONObject jsonobject2 = new JSONObject();
		JSONArray jsonarray = new JSONArray();
		List list = new ArrayList();
		
		jsonobject.put("id", 1);
		jsonobject.put("name", "haolei");
		jsonobject.put("address", "shenzhen");
		
		jsonobject2.put("id", 2);
		jsonobject2.put("name", "lion");
		jsonobject2.put("address", "suizhou");
		
		jsonarray.add(jsonobject);
		
		jsonarray.add(jsonobject2);
//		
//		Map map = new HashMap();
//		map.put("id", 5);
//		map.put("name", "haolwi");
//		map.put("age", 22);
//		
//		list.add(map);
//
//		jsonarray.addAll(list);
//		jsonarray.addAll(list);
//		jsonarray.addAll(list);
		
		System.out.println(jsonarray);
	}
}

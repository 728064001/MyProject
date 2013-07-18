package com.zyeeda.json;

import java.util.HashMap;
import java.util.Map;

import net.sf.json.JSONObject;

public class FirstJson {
	public static void main(String[] args) {
		JSONObject jsonobject = new JSONObject();
		Map map = new HashMap();
		map.put("id", 5);
		map.put("name", "haolwi");
		map.put("age", 22);
		
		Map map1 = new HashMap();
		map1.put("id", 2);
		map1.put("name", "lion");
		map1.put("age", 21);
		jsonobject.put("info",map);
		jsonobject.put("info2",map);
		System.out.println(jsonobject.toString());
	}
}

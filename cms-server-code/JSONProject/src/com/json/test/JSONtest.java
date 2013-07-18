package com.json.test;

import com.json.domain.Person;
import com.json.service.JsonService;
import com.json.tools.JsonTools;

public class JSONtest {
	public static void main(String[] args){
		String msg = "";
		JsonService js = new JsonService();
//		Person person = js.getPerson();
//		msg = JsonTools.createJsonString("person",person);
//		System.out.println(msg);
		
//		msg = JsonTools.createJsonString("person", js.getListPerson());
//		System.out.println(msg);
		
		msg = JsonTools.createJsonString("person", js.getListMapStringPerson());
		System.out.println(msg);
	}
}

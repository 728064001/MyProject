package com.json.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.json.domain.Person;

public class JsonService {
	public Person getPerson(){
		Person person = new Person(1001,"haolei","shenzhen");
		return person;
	}
	
	public List<Person> getListPerson(){
		List<Person> list = new ArrayList<Person>();
		Person person1 = new Person(1002,"shizi","futian");
		Person person2 = new Person(1003,"xiaoxiao","futian");
		
		list.add(person1);
		list.add(person2);
		return list;
	}
	
	public List<String> getListStringPerson(){
		List<String> listString = new ArrayList<String>();
		listString.add("shanghai");
		listString.add("beijing");
		listString.add("shandong");
		return listString;
	}
	
	public List<Map<String,Object>> getListMapStringPerson(){
		List<Map<String,Object>> listMap = new ArrayList<Map<String,Object>>();
		Map<String,Object> map1 = new HashMap<String,Object>();
		map1.put("id", 1000);
		map1.put("name", "lion");
		map1.put("address", "shanghai");
		listMap.add(map1);
		
		Map<String,Object> map2 = new HashMap<String,Object>();
		map2.put("id", 1001);
		map2.put("name", "shitou");
		map2.put("address","beijing");
		listMap.add(map2);
		
		return listMap;
	}
}

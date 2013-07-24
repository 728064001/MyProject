package com.haolei.tools;

import java.util.UUID;

public class CreateUUID {
	public static String createuuid(){
		UUID uuid = UUID.randomUUID();
		return uuid.toString();
	}
}

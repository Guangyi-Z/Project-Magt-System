package com.pmsystem.model.fr;

import java.io.Serializable;

public class UserInformation implements Serializable{

	private String user_id;
	private String user_name;
	private String user_phonenum;
	private String user_email;
	private String user_introduction;
	
	public String getUser_id() {
		return user_id;
	}
	public void setUser_id(String userId) {
		user_id = userId;
	}
	public String getUser_name() {
		return user_name;
	}
	public void setUser_name(String userName) {
		user_name = userName;
	}
	public String getUser_phonenum() {
		return user_phonenum;
	}
	public void setUser_phonenum(String userPhonenum) {
		user_phonenum = userPhonenum;
	}
	public String getUser_email() {
		return user_email;
	}
	public void setUser_email(String userEmail) {
		user_email = userEmail;
	}
	public String getUser_introduction() {
		return user_introduction;
	}
	public void setUser_introduction(String userIntroduction) {
		user_introduction = userIntroduction;
	}
		
}

package com.pmsystem.dao.pj;

public interface LoginDAO {
	public String login(String userName);

	public String searchUser(String userName);

	public String searchStaffID(String userName);
}

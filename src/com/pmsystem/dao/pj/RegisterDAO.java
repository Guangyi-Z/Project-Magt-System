package com.pmsystem.dao.pj;

import com.pmsystem.model.pj.User;

public interface RegisterDAO {

	public void register(User user);

	public String searchEmpID(String empID);

	public String searchUser(String userName);

	public String searchEmpIDFromUser(String empID);

}

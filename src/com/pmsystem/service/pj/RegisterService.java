package com.pmsystem.service.pj;

import com.pmsystem.dao.pj.RegisterDAO;
import com.pmsystem.model.pj.User;

public interface RegisterService {

	public String register(User user);

	public String searchEmpID(String empID);

	public String searchUser(String userName);

	public String searchEmpIDFromUser(String empID);

}

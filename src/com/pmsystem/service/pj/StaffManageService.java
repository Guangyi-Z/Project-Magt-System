package com.pmsystem.service.pj;

import java.util.List;

import com.pmsystem.model.fr.Staff;

public interface StaffManageService {

	public String addStaff(Staff staff);

	public List<Staff> getAllStaffs(int limit, int start);

	public int getCount();

	public String deleteStaff(String id);

}

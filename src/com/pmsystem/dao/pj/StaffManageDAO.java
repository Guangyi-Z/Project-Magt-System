package com.pmsystem.dao.pj;

import java.util.List;
import java.util.Map;

import com.pmsystem.model.fr.Staff;

public interface StaffManageDAO {

	public String addStaff(Staff staff);

	public List<Staff> getAllStaffCount(Map<String, Integer> map);

	public int getCount();

	public String deleteStaff(String id);

}

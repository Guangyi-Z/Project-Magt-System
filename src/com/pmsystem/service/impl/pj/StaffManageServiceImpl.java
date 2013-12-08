package com.pmsystem.service.impl.pj;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.pmsystem.dao.pj.StaffManageDAO;
import com.pmsystem.model.fr.Staff;
import com.pmsystem.model.pj.Project;
import com.pmsystem.service.pj.StaffManageService;

public class StaffManageServiceImpl implements StaffManageService {

	private StaffManageDAO staffManageDAO;

	public String addStaff(Staff staff) {
		try {
			staffManageDAO.addStaff(staff);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	public List<Staff> getAllStaffs(int limit, int start) {
		Map<String, Integer> map = new HashMap<String, Integer>();
		map.put("limit", limit);
		map.put("start", start);
		List<Staff> list = null;
		try {
			list = staffManageDAO.getAllStaffCount(map);
		}catch(Exception e){
			e.printStackTrace();
		}
		return list;
	}

	public int getCount(){
		int count = -1;
		try {
			count  = staffManageDAO.getCount();
		} catch(Exception e){
			e.printStackTrace();
		}
		return count;
	}

	public String deleteStaff(String id) {
		try {
			staffManageDAO.deleteStaff(id);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	public StaffManageDAO getStaffManageDAO() {
		return staffManageDAO;
	}

	public void setStaffManageDAO(StaffManageDAO staffManageDAO) {
		this.staffManageDAO = staffManageDAO;
	}

}

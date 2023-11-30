select MEMBER_ID, MEMBER_NAME, GENDER, date_format(DATE_OF_BIRTH, "%Y-%m-%d") as DATE_OF_BIRTH 
from MEMBER_PROFILE
where MONTH(DATE_OF_BIRTH) = 03 and GENDER="W" and not TLNO='null'
order by MEMBER_ID asc